const initController = (req, res) => {
  res.render("screens/init");
};

const listController = (req, res) => {
  res.render("screens/list");
};

// globalController 라는 애를 만듬
const globalController = {
  initController,
  listController,
};

export default globalController;
