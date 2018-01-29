import _ from 'lodash';

const plugin = (editor) => {
  editor.addButton('video', {
    text: '视频上传',
    icon: false,
    onclick: openUploadDialog
  });
  editor.addMenuItem('videoupload', {
    text: '视频上传',
    context: 'insert',
    onclick: openUploadDialog
  });

  function openUploadDialog() {
    // Open window
    editor.windowManager.open({
      title: '视频上传',
      url: "upload.html",
      onsubmit(e) {
        // Insert content when the window form is submitted
        const kebabbyString = _.kebabCase(e.data.title);
        editor.insertContent(kebabbyString);
      }
    });
  }
};

export default plugin;
