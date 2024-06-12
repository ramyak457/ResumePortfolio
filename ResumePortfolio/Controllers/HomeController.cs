using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ResumePortfolio.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Skills()
        {
            return View();
        }

        public ActionResult Projects()
        {
            return View();
        }

        public ActionResult Contact()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Contact(string firstname,string lastname,string email,string body)
        {
            try
            {
                string useremail = "ramya04.kumar@gmail.com";
                string subject = "Email From " + firstname + lastname;
                var client = new SmtpClient("smtp.gmail.com", 587)
                {
                    Credentials = new NetworkCredential(useremail, "wpektkdrfvmpfwwq"),
                    EnableSsl = true
                };
                client.Send(email, useremail, subject, body);
                ViewData["success"] = "Email sent successfully";
            }
            catch (Exception ex)
            {
                ViewData["error"] = ex.Message;
            }                       
            return View();
        }
    }
}