import dynamic from "next/dynamic";

export const createDynamicComponent = (path: any, ssr = false) => {
  const DynamicComponent = dynamic(() => path, {
    ssr,
    loading: () => <p>Loading...</p>,
  });
  return DynamicComponent;
};
