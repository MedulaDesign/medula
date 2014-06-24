// DocPad Configuration File
// http://docpad.org/docs/config

/**
 * Esta era la configuración original en CoffeScript, pero lo dejé como JS
 */

// # Define the DocPad Configuration
// docpadConfig = {
// 	templateData:
//         site:
//             title: "Medula Diseño"

//         getPreparedTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title
// }

// #Export the DocPad Configuration
// module.exports = docpadConfig

// http://emmet.io/blog/docpad/
// https://github.com/lukekarrys/html5-boilerplate.docpad

var docpadConfig =  {
    templateData: {
        site: {
            title: 'Medula Diseño',
            url: 'http://nuevo.medula.cl'
        },
        getPreparedTitle: function () {
            if (this.document.title) {
                return this.document.title + ' | ' + this.site.title;
            }  else {
                return this.site.title;
            }
        },
        getUrl: function (document) {
            return this.site.url + (document.url || (typeof document.get === "function" ? document.get('url') : void 0));
        }
    },
    collections: {
        pages: function () {
            return this.getCollection('html').findAllLive({
                isPage: true,
            },
            [{
                order: 1
            }]);
        }
    },
    plugins: {
        sass: {
            compass: false
        }
    },
    environments: {
        development: {
            templateData: {
                site: {
                    url: 'http://localhost:9778/'
                }
            },
            plugins: {
                sass: {
                    outputStyle: 'expanded'
                }
            }
        },
        outPath: '../out_dev'
    },
    localeCode: 'es',
    outPath: '../out'
};

// Export the DocPad Configuration
module.exports = docpadConfig;
