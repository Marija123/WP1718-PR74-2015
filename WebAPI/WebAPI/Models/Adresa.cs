using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Adresa
    {
        public String FormatAdrese { get; set; }
        

        public Adresa()
        {
            //FormatAdrese = "";
          
        }
        public Adresa(String f)
        {
            FormatAdrese = f;
        }
    }
}