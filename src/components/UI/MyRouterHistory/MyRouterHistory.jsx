import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

const MyRouterHistory = ({items, styles}) => {
  const home = { icon: 'pi pi-home', url: '/' }

  return (
    <BreadCrumb style={styles} model={items} home={home} />
  )
}

export default MyRouterHistory;