export interface User {
  username: string;
  email: string;
  password: string;
  submodules: Array<submodulesPermission>;
}

export interface submodulesPermission {
  submodule: string;
  access: boolean;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any, {}>;
}
