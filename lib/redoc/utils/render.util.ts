import pathModule from 'path';
import handlebars from 'express-handlebars';
import { RedocModuleOptions } from '../interfaces/redoc-module-options.interface';
import { RedocDocument } from '../interfaces/redoc-document.interface';

export async function renderRedocView(data: {
  path: string;
  docUrl: string;
  tryItOutJsMinFileName: string;
  options: RedocModuleOptions;
  document: RedocDocument;
}): Promise<string> {
  const hbs = handlebars.create({
    helpers: { toJson: (context) => JSON.stringify(context) },
  });
  const redocFilePath = pathModule.join(
    __dirname,
    '..',
    'views',
    'view.handlebars',
  );

  return hbs.render(redocFilePath, data);
}
