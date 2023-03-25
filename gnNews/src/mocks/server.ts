import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { News } from '../types';
import mockedNewsResp from './mockedNewsResp.json';

export const server = setupServer(
  rest.get<News>('https://newsapi.org/v2/top-headlines', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedNewsResp));
  })
);
