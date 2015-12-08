function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __loadTemplate = __helpers.l,
      __renderer = __helpers.r,
      ____layouts_components_tmpl_metadata_renderer_js = __renderer(require("../_layouts/components/tmpl-metadata/renderer")),
      __tag = __helpers.t,
      ____________node_modules_marko_node_modules_marko_layout_use_tag_js = __renderer(require("marko/node_modules/marko-layout/use-tag")),
      ____________node_modules_marko_node_modules_marko_layout_put_tag_js = __renderer(require("marko/node_modules/marko-layout/put-tag")),
      ____layouts_components_ax5docs_md_renderer_js = __renderer(require("../_layouts/components/ax5docs-md/renderer"));

  return function render(data, out) {
    __tag(out,
      ____layouts_components_tmpl_metadata_renderer_js,
      {},
      function(out) {
        out.w('\n  <parent></parent>\n  <sort>0</sort>\n\n  <id>install</id>\n  <title>Install</title>\n  <desc></desc>\n');
      });

    out.w('\n\n');
    __tag(out,
      ____________node_modules_marko_node_modules_marko_layout_use_tag_js,
      {
        "template": __loadTemplate(data.layout_path, require),
        "getContent": function(__layoutHelper) {
          out.w('\n  ');
          __tag(out,
            ____________node_modules_marko_node_modules_marko_layout_put_tag_js,
            {
              "into": "body",
              "layout": __layoutHelper
            },
            function(out) {
              out.w('\n    <section class="ax5docs-section">\n      ');
              __tag(out,
                ____layouts_components_ax5docs_md_renderer_js,
                {},
                function(out) {
                  out.w('\n        ### Insert the "ax5" in the HTML HEAD.\n        Location of the folder can be determined freely in your project. But be careful not to accidentally caused exactly the path.\n        ```html\n        <html>\n          <head>\n            <script type="text/javascript" src="../../jquery/jquery.min.js"></script>\n            <script type="text/javascript" src="../../ax5core/dist/ax5core.min.js"></script>\n          </head>\n          <body>\n          ....\n          </body>\n        </html>\n        ```\n\n        Enjoy "AX5" utility library\n        ```js\n        ax5.util.date("20111111");\n        //Fri Nov 11 2011 23:59:00 GMT+0900 (KST)\n        ax5.util.date("20111111", {\'return\':\'yyyy/mm/dd\'});\n        //"2011/11/11"\n        ```\n\n        "AX5" utility is very safe and useful.\n        \'ax5.info\', \'ax5.util\', and consists of \'ax5.ui\', are among the "ax5.ui" At the same time, perform the parenting role and the root of the UI library.\n\n        If you have any questions, please refer to the following link:\n\n        * gitHub\n\n      ');
                });

              out.w('\n    </section>\n\n  ');
            });

          out.w('\n  ');
          __tag(out,
            ____________node_modules_marko_node_modules_marko_layout_put_tag_js,
            {
              "into": "page-js",
              "layout": __layoutHelper
            },
            function(out) {
              out.w('\n\n  ');
            });

          out.w('\n');
        },
        "*": {
          "pageTitle": "Install",
          "showHeader": true
        }
      });
  };
}
(module.exports = require("marko").c(__filename)).c(create);