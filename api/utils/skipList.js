const isSkipList = async (req, res, next) => {
  const { ip } = req.params;
  const isSkip = await req.models.skipList.get(ip)
    .then(response => {

    });
};

module.exports = {
  isSkipList,
};
