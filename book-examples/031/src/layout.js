import React from 'react';

export default class Layout extends React.Component{
 render() {
  let {navigation, header, sidebar, content,
       company, path, ...other} = this.props;
  if (sidebar) {
   return (
     <div {...other}>
         <div className="container-fluid">
             { navigation && navigation(path) }
             { header && header() }
             <div className="row">
                 <div className="col-md-8">
                     { content }
                 </div>
                 <div className="col-md-4">
                     { sidebar }
                 </div>
             </div>
         </div>
         <div className="footer">
             <p>Copyright (c) 2018</p>
         </div>
     </div>   );
  } else {
    return (
      <div {...other}>
          <div className="container-fluid">
              { navigation && navigation(path) }
              { header && header() }
              <div className="row">
                  <div className="col-md-12">
                      { content }
                  </div>
              </div>
          </div>
          <div className="footer">
              <p>Copyright (c) 2018</p>
          </div>
      </div>    );
  }
 }
}
