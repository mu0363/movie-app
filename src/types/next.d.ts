import type { NextComponentType, NextPageContext, CustomNextPage } from "next";
import type { AppProps } from "next/app";

declare module "next" {
  // eslint-disable-next-line
  type CustomNextPage<P = {}> = NextComponentType<NextPageContext, any, P> & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}

declare module "next/app" {
  // eslint-disable-next-line @typescript-eslint/ban-types
  type AppLayoutProps<P = {}> = AppProps & {
    Component: CustomNextPage;
  };
}

/* 参考記事 
 https://dev.to/ofilipowicz/next-js-per-page-layouts-and-typescript-lh5
 */
