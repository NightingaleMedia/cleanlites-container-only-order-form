import React from "react";

const SiteInfo = ({ getInputValue }) => {
  return (
    <section class="section--site-info" data-name="siteInfo">
      <div class="section--title">Site Info</div>
      <div class="container-fluid">
        <div class="row site-info--row">
          <div class="col-md-12">
            <label>Other Comments</label>
            <br />
            <textarea
              class="textarea"
              type="textarea"
              name="comments"
              rows="2"
              value={getInputValue("comments")}
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
};

SiteInfo.propTypes = {};

export default SiteInfo;
