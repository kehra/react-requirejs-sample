define(['react'], function(React) {
  return React.createClass({
    getInitialState: function () {
      return { count: 0 };
    },

    pushButton: function() {
      this.setState({count: this.state.count += 1});
    },

    render: function () {
      return(
        <div>
          <span>ボタンを{this.state.count}回押しました。</span>
          <input type="button" value="Push" onClick={this.pushButton} />
        </div>
      );
    }
  });
});