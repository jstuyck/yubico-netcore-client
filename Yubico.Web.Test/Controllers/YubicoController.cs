using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Yubico.Web.Test.FormModel;
using YubicoDotNetClient;

namespace Yubico.Web.Test.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class YubicoClientController : ControllerBase
    {

        [Route("submit")]
        [HttpPost]
        public async Task<IActionResult> SubmitAuth([FromBody] AuthFormModel payload)
        {
            YubicoClient client = new YubicoClient(payload.ClientID);

            client.SetApiKey(payload.ApiKey);
            client.SetSync(payload.Sync);
            client.SetNonce(payload.Nonce);
             try
            {
                
                var response = await client.VerifyAsync(payload.OtpInput);
              
                if (response != null)
                {
                   
                    //response.Status, 
                    //response.PublicId
                    // response.UseCounter, response.SessionCounter,
                    //response.Url
                }
                else
                {
                    //OutputField.Text = "Null result returned, error in call";
                }
            }
            catch (YubicoValidationFailure yvf)
            {
                //OutputField.Text = string.Format("Failure in validation: {0}{1}", yvf.Message, Environment.NewLine);
            }
            return new OkResult();

        }
    }
}