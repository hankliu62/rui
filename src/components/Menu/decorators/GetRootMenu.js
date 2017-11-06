function GetRootMenu(WrappedComponent) {
  WrappedComponent.prototype.getRootMenu = function () {
    let parent = this.context.component;
    while (parent && parent.instanceType !== 'menu') {
      parent = parent.context.component;
    }

    return parent;
  };
}


export default GetRootMenu;
