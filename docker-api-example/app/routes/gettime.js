module.exports = {
  get: (req, res) => {
    const ts = Date.now();
    const dateObj = new Date(ts);
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    res.status(200).json({ message: `${year}-${month}-${date}` });
  },
};
