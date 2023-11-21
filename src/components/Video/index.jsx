import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import TxIcon from '@/ui/TxIcon';
// import useIsMobile from '@/hooks/useIsMobile';
const Wrapper = styled.div`
  height: 100%;
  position: relative;
  user-select: none;
  strong {
    position: absolute;
    left: 15px;
    transform: rotateZ(-30deg);
    font-size: 20px;
  }
  .icon {
    position: relative;
  }
  .video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: fill;
  }
  .control-bar {
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 30px;
    display: flex;
    opacity: 1;
    transition: .3s;
    background-color: rgba(43,51,63,.7);
    .point {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      position: absolute;
      right: -6px;
      top: 50%;
      transform: translateY(-50%);
      background: #fff;
      transition: .3s;
      pointer-events: none;
      z-index: 20;
    }
    .mouse-display {
      position: absolute;
      width: 1px;
      height: 100%;
      background: #000;
      pointer-events: none;
      transition: top .3s,opacity .3s;
      opacity: 0;
      z-index: 19;
      }
    .time-tooltip {
      padding: 0 8px ;
      position: absolute;
      top: -18px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
      transition: .3s;
      opacity: 0;
      color: #fff;
      background-color: rgba(0,0,0,.8)
    }
    .volume {
      margin-right: 10px;
      cursor: pointer;
      display: flex;
      .volume-control {
        width: 0;
        height: 100%;
        display: flex;
        align-items: center;
        opacity: 0;
        transition: .5s;
      }
      .progress {
        width: 100%;
        height: 3px;
        position: relative;
        background: rgba(115,133,159,.5);
        align-items: center;
        .volume-progress {
          width: 100%;
          height: 3px;
          background: #fff;
          position: absolute;
        }
      }
    }
    .volume:hover .volume-control {
      width: 30px;
      opacity: 1;
      margin-right: 20px;
    }
    .volume-control :hover .mouse-display {
      opacity: 1;
    }
    .volume-control :hover .mouse-display .time-tooltip {
      opacity: 1;
      top: -30px;
    }
    .play,.volume-icon,.fullscreen-control {
      width: 40px;
      height: 30px;
      color: #fff;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
    }
    .progress-control {
      cursor: pointer;
      height: 100%;
      width: 4em;
      flex: auto;
      display: flex;
      align-items: center;
      min-width: 4em;
      .progress {
        width: 100%;
        height: 3px;
        position: relative;
        background: rgba(115,133,159,.5);
        align-items: center;
        transition: .3s;
        .time-tooltip {
          top: -18px;
        }
        .play-progress {
          height: 100%;
          position: absolute;
          background: #fff;
          .time-tooltip {
            color: #000000;
            background-color: rgba(255,255,255,.8);
          }
        }
        .load-progress {
          width: 160px;
          position: absolute;
          height: 100%;
          background: rgba(115,133,159,.75);
        }
      }
    }
    .progress-control:hover .play-progress .time-tooltip {
      opacity: 1;
      top: -26px;
    }
    .progress-control:hover .mouse-display .time-tooltip {
      opacity: 1;
      top: -30px;
    }
    .progress-control:hover .mouse-display {
      opacity: 1;
    }
    .progress-control:hover .progress {
      height: 5px;
    }
    .progress-control:hover .point {
      width: 15px;
      height: 15px;
    }
    .remaining-time {
      min-width: 20px;
      font-size: 14px;
      padding-left: 10px;
      padding-right: 10px;
      color: #fff;
      line-height: 30px;
    }
    .fullscreen-control {
      width: 40px;
      position: relative;
      text-align: center;
      height: 100%;
    }
  }
  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    animation: loading .6s linear infinite;
    font-size: 38px;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Video = ({ autoPlay, src, control, muted, poster }) => {
  const isMobile = false;
  const [isPlay, setIsPlay] = useState(autoPlay);
  const [isFull, setIsFull] = useState(false);
  const [cardLeft, setCardLedt] = useState(0);
  const [preVolume, setPreVolume] = useState(0);
  const [progressWidth, setProgressWidth] = useState('0');
  const [currentTime, setCurrentTime] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [cardTime, setCardTime] = useState(0);
  const [volumeLevel, setVoumeLevel] = useState(0);
  const [volumeCardLeft, setVoumeCardLeft] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [loading, setLoading] = useState(true);
  const video = useRef(null);
  const container = useRef(null);
  const progressControl = useRef(null);
  const volume = useRef(null);
  const timer = useRef(null);
  const duration = video.current?.duration;

  const mouseMove = e => {
    setCardLedt(e.nativeEvent.offsetX);
    setCardTime(e.nativeEvent.offsetX / progressControl.current?.clientWidth * duration);
  };

  const mouseMoveVolume = e => {
    setVoumeCardLeft(e.nativeEvent.offsetX);
  };

  const videoMouseMove = useCallback(() => {
    setOpacity(1);
    clearTimeout(timer.current);
    if (!isPlay) return;
    consoleTimer();
  }, [isPlay]);

  const playVideo = useCallback(e => {
    if (!control) return;
    isPlay ? video.current?.pause() : video.current?.play();
    setIsPlay(!isPlay);
    if ((isPlay && e.target.className === 'video') || e.target.className === 'play') {
      setTimeout(() => {
        clearTimeout(timer.current);
      });
    }
  }, [isPlay, control]);

  const fullScreen = () => {
    if (!control) return;
    isFull ? document.exitFullscreen() : container.current?.requestFullscreen();
    setIsFull(!isFull);
  };

  const mouseEnterControl = () => {
    setOpacity(1);
    clearTimeout(timer.current);
  };

  const consoleTimer = () => {
    timer.current = setTimeout(() => {
      setOpacity(0);
      timer.current = null;
    }, 3000);
  };
  // const formatVolume = lv => (lv >= 0.6 ? '大' : lv >= 0.3 ? '中' : lv === 0 ? '无' : '小');
  const progressClick = e => {
    const clientWidth = progressControl.current?.clientWidth;
    progressControl.current.onmousemove = event => {
      video.current.currentTime = event.offsetX  / clientWidth * duration;
    };
    video.current.currentTime = e.nativeEvent?.offsetX / clientWidth * duration;
  };

  const volumeClick = e => {
    const clientWidth = volume.current?.clientWidth;
    volume.current.onmousemove = event => {
      video.current.volume = event.offsetX / clientWidth;
      setVoumeLevel(event.offsetX / clientWidth);
    };
    const offsetX = e.nativeEvent?.offsetX;
    video.current.volume = offsetX / clientWidth;
    setVoumeLevel(offsetX / clientWidth);
  };

  const formatTime = ms => {
    const minutes = parseInt(ms / 60, 10);
    const remaining = parseInt(ms % 60, 10);
    const seconds = remaining > 9 ? remaining : `0${remaining}`;
    return isNaN(ms) ? '00:00' : `${minutes}:${seconds}`;
  };

  const volumeIconClick = () => {
    if (video.current.volume) {
      setPreVolume(volumeLevel);
      video.current.volume = 0;
      setVoumeLevel(0);
    } else {
      video.current.volume = preVolume;
      setVoumeLevel(preVolume);
    }
  };

  const timeUpdate = e => {
    if (!control) return;
    const cTime = e.target.currentTime;
    setRemaining(duration - cTime);
    setCurrentTime(cTime);
    setProgressWidth(`${cTime / duration * 100}%`);
    if (cTime === duration) {
      setIsPlay(false);
    }
  };

  useEffect(() => {
    video.current && setRemaining(duration);
  }, [duration]);

  useEffect(() => {
    videoMouseMove();
  }, [isPlay, videoMouseMove]);

  useEffect(() => {
    !muted && setVoumeLevel(1);
  }, [muted]);

  const callback = () => {
    if (volume.current && progressControl.current) {
      volume.current.onmousemove = null;
      progressControl.current.onmousemove = null;
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', callback);
    return () => {
      clearTimeout(timer.current);
      document.removeEventListener('mouseup', callback);
    };
  }, []);

  return  (
    <Wrapper ref={container}>
      {isMobile ? (
        <video
          className="video"
          src={src}
          autoPlay={true}
          poster={poster}
          preload='metadata'
          controls={true}
        />
      ) : (
        <>
          <video
            className="video"
            ref={video}
            src={src}
            onClick={playVideo}
            onDoubleClick={fullScreen}
            onTimeUpdateCapture={timeUpdate}
            autoPlay={autoPlay}
            onMouseMove={videoMouseMove}
            muted={!volumeLevel}
            poster={poster}
            preload='metadata'
            onWaiting={() => {
              setLoading(true);
            }}
            onCanPlay={() => {
              setLoading(false);
            }}
          />
          {control && (
            <div
              className="control-bar"
              style={{ opacity }}
              onMouseEnter={mouseEnterControl}
              onMouseLeave={isPlay ? consoleTimer : null}
            >
              <div className="play" onClick={playVideo}>
                {/* <TxIcon type={isPlay ? 'pause' : 'playfill'} /> */}
              </div>
              <div className="volume">
                <div className="volume-icon" onClick={volumeIconClick}>
                  <div className="icon">
                  {/* <TxIcon type="yinlianglabashengyin" /> */}
                    {!volumeLevel && <strong>\</strong>}
                  </div>
                </div>
                <div
                  className="volume-control"
                  onMouseDown={volumeClick}
                  onMouseMove={mouseMoveVolume}
                  ref={volume}
                >
                  <div className="progress">
                    <div className="mouse-display" style={{ left: volumeCardLeft }}>
                      <div className="time-tooltip">
                        {parseInt(volumeCardLeft / 30 * 100, 10)}%
                      </div>
                    </div>
                    <div className="volume-progress" style={{ width: `${volumeLevel * 100}%` }}>
                      <div className="point"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="progress-control"
                onMouseMove={mouseMove}
                onMouseDown={progressClick}
                ref={progressControl}
              >
                <div className="progress">
                  {/* <div className="load-progress"></div> */}
                  <div className="mouse-display" style={{ left: cardLeft }}>
                    <div className="time-tooltip">{formatTime(cardTime)}</div>
                  </div>
                  <div className="play-progress" style={{ width: progressWidth }}>
                    <div className="point">
                      <div className="time-tooltip">{formatTime(currentTime)}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="remaining-time">-{video.current && formatTime(remaining)}</div>
              <div className="fullscreen-control" onClick={fullScreen}>
                {/* <TxIcon type={`fullscreen${isFull ? '-exit' : ''}`} /> */}
              </div>
            </div>
          )}
          {/* {loading && <div className="loading"><TxIcon type="loading"></TxIcon></div>} */}
        </>
      )}
    </Wrapper>
  );
};

export default memo(Video);

Video.propTypes = {
  src: PropTypes.string.isRequired,
  control: PropTypes.bool.isRequired,
  poster: PropTypes.string,
  autoPlay: PropTypes.bool,
  muted: PropTypes.bool,
};

Video.defaultProps = {
  autoPlay: true,
  control: true,
  muted: false,
  poster: '',
};
