import Service from './service'
const customerContact = {
  state: {
    dataList: [],
  },
  reducers: {
    getTableData(state, data) {
      return {
        ...state,
        dataList: data,
      }
    }
  },
  effects: {
    async asyncGetTableData() {
      const data = await Service.getTableData();
      this.getTableData(data);
    }
  },
};

export default customerContact;