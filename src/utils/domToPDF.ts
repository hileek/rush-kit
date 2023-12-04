// 导出pdf
const domToPDF = async (el) => {
  const width = el.clientWidth;
  const totalHeight = el.clientHeight;
  const itemHeight = 200;
  const ignores = [];
  const pages = Math.ceil(totalHeight / itemHeight);
  const iframe = document.createElement('iframe');
  iframe.setAttribute('style', `display: none; width: ${width}px; height: ${itemHeight * pages}px; margin: 0 !important; padding: 0 !important; border: 0 !important;`);
  document.body.appendChild(iframe);
  const doc = iframe.contentWindow.document;

  const  createTrimmedDocument = (targetElement) => {
    // 获取目标元素的路径
    const path = [];
    let currentElement = targetElement;
    let isTarget = true;
    
    while (currentElement) {
      const node = currentElement.cloneNode(isTarget);
      if (!isTarget) {
        node.setAttribute('style', 'width: fit-content !important; height: auto !important; margin: 0 !important; padding: 0 !important;; border: 0 !important;');
      }
      path.unshift(node);
      currentElement = currentElement.parentElement;
      isTarget = false;
    }

    // 重新构建树
    let currentParent = path[0];
    const root = currentParent;

    for (let i = 1; i < path.length; i++) {
        const ancestor = path[i];
        currentParent.appendChild(ancestor);
        currentParent = ancestor;
    }

    const head = document.head.cloneNode(true);
    root.insertBefore(head, root.firstChild);

    return root;
  };

  doc.replaceChild(createTrimmedDocument(el), doc.documentElement);
  const styleTag = doc.createElement('style');

  styleTag.innerHTML = `
    html, body {
      height: ${itemHeight * pages}px;
      overflow: hidden;
    }
    @page {
      size: ${width}px ${itemHeight}px;
      margin: 0;
    }
    ${ignores.map(symbol => `${symbol} { display: none !important; }`)}
  `;
  doc.head.appendChild(styleTag);
  // canvas转换
  // const canvasList = el.getElementsByTagName('canvas');

  // const canvasToImage = (index: number) => {
  //   return new Promise<void>(resolve => {
  //     const canvas = canvasList[index];
  //     const i = index < 2 ? index + 1 : 3;
  //     const pixelRatio = 6;
  //     const imgSrc = chartMap['chart' + i].getDataURL({
  //       pixelRatio,
  //     });

  //     const img = document.createElement('img') as any;
  //     img.src = imgSrc;
  //     img.onload = function () {
  //       img.width = img.width / pixelRatio;
  //       img.height = img.height / pixelRatio;
  //       canvas.parentNode.appendChild(img);
  //       // canvas.remove();
  //       resolve();
  //     };
  //   });
  // };

  // 所有图片加载完毕再继续执行
  // Promise.all([...[...canvasList].map((_, index) => canvasToImage(index))]).then(() => {
  //   doc.body.appendChild(el);
    // doc.close();
    // iframe.contentWindow.focus();
  //   const oldTitle = document.title;
  //   document.title = `吉祥航空每日生产运行简报${formateDate(state.date, 'YYYYMMDD', null, true)}.pdf`;
    // iframe.contentWindow.print();
  //   el.remove();
  //   document.title = oldTitle;
  //   iframe.style.display = 'none';
  // });
};

export default domToPDF;
