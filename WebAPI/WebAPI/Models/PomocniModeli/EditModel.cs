using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models.PomocniModeli
{
    public class EditModel
    {
        public String Username { get; set; }
        public  String Password { get; set; }
        public String Ime { get; set; }
        public String Prezime { get; set; }
        public String Pol { get; set; }
        public String Jmbg { get; set; }
        public String Telefon { get; set; }
        public String Email { get; set; }
        public String OldUsername { get; set; }
      
    }
}