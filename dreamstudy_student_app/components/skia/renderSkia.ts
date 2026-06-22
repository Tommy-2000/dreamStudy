/**
 * Credit to https://github.com/expo/examples/blob/master/with-skia/components/async-skia.tsx
 */

// Helper to ensure Skia loads or throws inside of React Suspense on web.
import React from "react";

import { LoadSkiaWeb } from "@shopify/react-native-skia/lib/module/web";

function wrapSkiaPromise<T>(promise: Promise<T>) {
  let status: "rendering" | "rendered" | "error" = "rendering";
  let result: T | unknown;
  let suspender = promise.then(
    (s: T) => {
      status = "rendered";
      result = s;
    },
    (e: unknown) => {
      status = "error";
      result = e;
    }
  );
  return {
    read(): T {
      if (status === "rendering") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "rendered") {
        return result as T;
      }
      throw new Error("Skia component failed to render, please try again");
    },
  };
}

const promiseMap = new Map();

const getSuspendingSkiaPromise = () => {
  const id = "skia";
  if (!promiseMap.has(id)) {
    const loader = wrapSkiaPromise(LoadSkiaWeb());
    promiseMap.set(id, loader);
    return loader.read();
  }

  return promiseMap.get(id).read();
};

const getResolvedSkiaPromise = React.cache(getSuspendingSkiaPromise);

export function RenderSkia({}) {
  getResolvedSkiaPromise();
  return null;
}