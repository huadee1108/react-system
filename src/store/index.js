import { init } from '@rematch/core'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Models from '../models'

const store = init({
  models: {
    ...Models
  },
  redux: {
    middlewares: [thunk, logger]
  }
});

export default store;