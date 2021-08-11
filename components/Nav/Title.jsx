import React from "react";
import { connect } from "react-redux";
import { boardOpen } from "../actions/";

//class Title extends React.Component {
  const page = (Page) => {
  return class Title extends React.Component {
    render() {
      return (
        <Provider boardOpen={boardOpen}>
          <Page>
            <div className="kanban__nav-name">
              <div className="kanban-name">Studio Board</div>

              <div className="kanban-arrow" onClick={this.handleBoardOpen}>
                <i className="material-icons">
                  {board ? "expand_more" : "chevron_right"}
                </i>
              </div>
            </div>
            {this.props.children}
          </Page>
        </Provider>
      );
    }
    handleBoardOpen = () => {
      const { boardOpen } = this.props;
      boardOpen();
    };
  };

}

const mapStateToProps = state => ({
  board: state.board
});
export default page;
  // render() {
  //   const { board } = this.props;
  //   return (
  //     <div className="kanban__nav-name">
  //       <div className="kanban-name">Studio Board</div>
  //       <div className="kanban-arrow" onClick={this.handleBoardOpen}>
  //         <i className="material-icons">
  //           {board ? "expand_more" : "chevron_right"}
  //         </i>
  //       </div>
  //     </div>
  //   );
  // }

//   handleBoardOpen = () => {
//     const { boardOpen } = this.props;
//     boardOpen();
//   };
// }

// const mapStateToProps = state => ({
//   board: state.board
// });
// export default Title;
// export default connect(
//   mapStateToProps,
//   { boardOpen }
// )(Title);
