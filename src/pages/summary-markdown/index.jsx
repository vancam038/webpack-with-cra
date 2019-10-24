import React, { Component } from "react";
import LineChart from "src/components/LineChart";
// import LineChart from "@/components/LineChart";

class SummaryMarkdown extends Component {
  render() {
    return (
      <div>
        <LineChart isSummaryMarkdown="yes" />
      </div>
    );
  }
}

export default SummaryMarkdown;
