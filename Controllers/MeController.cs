using System;
using System.Net;
using System.Web;
using System.Web.Http;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

using WebApplication.Models;

namespace WebApplication.Controllers
{
    public class MeController : ApiController
    {
        public MeController()
        {
        }

        // GET api/Me
        public GetViewModel Get(string origin, string destination)
        {
            const string Url        = @"https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins={0}&destinations={1}";
            JObject      jsonObject = null;
            string       url        = string.Format( Url                                ,
                                                     HttpUtility.UrlEncode(origin     ) ,
                                                     HttpUtility.UrlEncode(destination) );
            string       content    = null;
            string       distance   = null;
            string       time       = null;

            try
            {
                using ( WebClient wc = new System.Net.WebClient() )
                {
                    content = wc.DownloadString(url);
                }
                jsonObject = (JObject) JsonConvert.DeserializeObject(content);
                distance   = jsonObject["rows"].First["elements"].First["distance"].Value<string>("text");
                time       = jsonObject["rows"].First["elements"].First["duration"].Value<string>("text");
            }
            catch (Exception)
            {
                distance = "unknown";
                time     = "unknown";
            }

            return new GetViewModel() {
                                          Distance = distance ,
                                          Time     = time
                                      };
        }
    }
}