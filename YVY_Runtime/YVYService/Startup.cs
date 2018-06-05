using Microsoft.Owin;
using Microsoft.Owin.Builder;
//using Owin;

[assembly: OwinStartup(typeof(YVYService.Startup))]

namespace YVYService
{
    public partial class Startup
    {
        public void Configuration(AppBuilder app)
        {
            ConfigureMobileApp(app);
        }
    }
}