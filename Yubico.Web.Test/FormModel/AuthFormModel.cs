namespace Yubico.Web.Test.FormModel
{
    public class AuthFormModel
    {
        public string OtpInput { get; set; }
        public string ClientID { get; set; }
        public string ApiKey { get; set; }
        public string Sync { get; set; }
        public string Nonce { get; set; }
    }
}