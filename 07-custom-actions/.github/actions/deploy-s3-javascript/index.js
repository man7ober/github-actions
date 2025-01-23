const core = require('@actions/core');
const exec = require('@actions/exec');

function run() {
  // 1. Get input values
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  // 2. Upload files
  exec.exec(
    `aws s3 sync ${distFolder} s3://${bucket} --region ${bucketRegion}`
  );

  const websiteUrl = `http://${bucket}.s3-website.${bucketRegion}.amazonaws.com`;

  core.notice('•×• Deployed to aws s3 •×•');
  core.setOutput('website-url', websiteUrl);
}

run();
