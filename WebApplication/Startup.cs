using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;

namespace WebApplication
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Use nice error pages
            app.UseErrorPage();

            // Serve static html angular application
            app.UseFileServer(new FileServerOptions()
            {
                RequestPath = PathString.Empty,
                FileSystem = new PhysicalFileSystem(@".\AngularJsApp\"),
                EnableDirectoryBrowsing = false,
            });

            // Serve static Content resources (from nuget packages)
            app.UseFileServer(new FileServerOptions()
            {
                RequestPath = new PathString("/Content"),
                FileSystem = new PhysicalFileSystem(@".\Content\"),
                EnableDirectoryBrowsing = false,
            });

            // Serve static Javascript resources (from nuget packages)
            app.UseFileServer(new FileServerOptions()
            {
                RequestPath = new PathString("/scripts"),
                FileSystem = new PhysicalFileSystem(@".\scripts\"),
                EnableDirectoryBrowsing = false,
            });

            // Enable Web Api
            HttpConfiguration config = new HttpConfiguration();
            WebApiConfig.Register(config);
            app.UseWebApi(config);

            // And finally say something.
            app.Run(context =>
            {
                context.Response.ContentType = "text/plain";
                context.Response.StatusCode = 404;
                return context.Response.WriteAsync("Your request has not beed handled! Check your url.");
            });
        }
    } 
}