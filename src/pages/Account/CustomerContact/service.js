import { Fetch } from '../../../utils/index'

const getTableData = () => Fetch(`/posts`, { method: 'GET' });

export default {
  getTableData
}