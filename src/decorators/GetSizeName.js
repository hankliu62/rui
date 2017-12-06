function GetSizeName(WrappedComponent) {
  WrappedComponent.prototype.getSizeName = function () {
    const { size } = this.props;
    let sizeName = '';
    switch (size) {
      case 'large': {
        sizeName = 'lg';
        break;
      }
      case 'small': {
        sizeName = 'sm';
        break;
      }
    }

    return sizeName;
  };
}


export default GetSizeName;
