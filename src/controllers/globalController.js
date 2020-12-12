const initController = (req, res) => {
  res.render("/screens/init");
};

const listController = (req, res) => {
  res.render("/screens/list");
};

// globalRouter 라는 애를 만듬
const globalRouter = {
  initController,
  listController,
};

export default globalRouter;
