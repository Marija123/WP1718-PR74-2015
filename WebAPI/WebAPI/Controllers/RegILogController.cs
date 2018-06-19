using System;
using System.Web;
using System.Collections.Generic;
using System.Web.Http;
using WebAPI.DataIO;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class RegILogController : ApiController
    {
        public static XMLDataIO xml = new XMLDataIO();
       

        [HttpPost]
        [ActionName("Register")]
        public bool Register([FromBody]MusterijaPomocni k)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Musterije.xml");
            string ss1 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Vozaci.xml");
            string ss2 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Dispeceri.xml");
            List<Musterija> users = xml.ReadUsers(ss);
            List<Vozac> vozaci = xml.ReadDrivers(ss1);
            List<Dispecer> disp = xml.ReadDispecer(ss2);
            bool g = true;
            foreach (Musterija u in users)
            {
                if (u.KorisnickoIme == k.Username)
                {

                    g = false;
                }
             }
            foreach(Vozac u in vozaci)
            {
                if (u.KorisnickoIme == k.Username)
                {

                    g = false;
                }
            }
            foreach(Dispecer u in disp)
            {

                if (u.KorisnickoIme == k.Username)
                {

                    g = false;
                }
            }

            if (g)
            {
                Musterija user = new Musterija();
                user.KorisnickoIme = k.Username;
                user.Lozinka = k.Password;
                user.Ime = k.Ime;
                user.Prezime = k.Prezime;
                if (k.Pol == "Female")
                {
                    user.Pol = Enums.PolKorisnika.Zensko;
                }
                else
                {
                    user.Pol = Enums.PolKorisnika.Musko;
                }
                user.JMBG = k.Jmbg;
                user.KontaktTelefon = k.Telefon;
                user.Email = k.Email;
                user.Uloga = Enums.UlogaKorisnika.Musterija;
               
               
                users.Add(user);
                xml.WriteUsers(users, ss);

                return true;
            }
            else
            {
                return false;
            }
      
        }


        [HttpPost]
        [ActionName("Login")]
        public Korisnik Login([FromBody]LogovaniKorisnik k)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Musterije.xml");
            string ss1 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Vozaci.xml");
            string ss2 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Dispeceri.xml");
            List<Musterija> users = xml.ReadUsers(ss);
            List<Vozac> vozaci = xml.ReadDrivers(ss1);
            List<Dispecer> dispeceri = xml.ReadDispecer(ss2);

            foreach (var v in users)
            {
                if (v.KorisnickoIme == k.Username && v.Lozinka == k.Password)
                {
                    return v;
                }
            }
            foreach (var v in vozaci)
            {
                if (v.KorisnickoIme == k.Username && v.Lozinka == k.Password)
                {
                    return v;
                }
            }
            foreach (var v in dispeceri)
            {
                if (v.KorisnickoIme == k.Username && v.Lozinka == k.Password)
                {
                    return v;
                }
            }

            return null;
        }

        [HttpPost]
        [ActionName("RegisterDriver")]
        public bool RegisterDriver([FromBody]VozacPomocna k)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Musterije.xml");
            string ss1 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Vozaci.xml");
            string ss2 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Dispeceri.xml");
            List<Musterija> users = xml.ReadUsers(ss);
            List<Vozac> vozaci = xml.ReadDrivers(ss1);
            List<Dispecer> disp = xml.ReadDispecer(ss2);
            bool g = true;
            foreach (Musterija u in users)
            {
                if (u.KorisnickoIme == k.Username)
                {

                    g = false;
                }
            }
            foreach (Vozac u in vozaci)
            {
                if (u.KorisnickoIme == k.Username)
                {

                    g = false;
                }
            }
            foreach (Dispecer u in disp)
            {

                if (u.KorisnickoIme == k.Username)
                {

                    g = false;
                }
            }

            if (g)
            {
                Vozac user = new Vozac();
                user.KorisnickoIme = k.Username;
                user.Lozinka = k.Password;
                user.Ime = k.Ime;
                user.Prezime = k.Prezime;
                if (k.Pol == "Female")
                {
                    user.Pol = Enums.PolKorisnika.Zensko;
                }
                else
                {
                    user.Pol = Enums.PolKorisnika.Musko;
                }
                user.JMBG = k.Jmbg;
                user.KontaktTelefon = k.Telefon;
                user.Email = k.Email;
                user.Uloga = Enums.UlogaKorisnika.Vozac;
                user.Zauzet = false;
                user.Lok = new Lokacija();

                string ss4 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Automobili.xml");
                
                List<Automobil> auta = xml.ReadAuto(ss4);
                int brVozila = auta.Count + 1;

                user.Auto = new Automobil();
                user.Auto.BrojTaksiVozila = brVozila;

                foreach (Automobil a in auta)
                {
                    if(a.BrojRegistarskeOzn.Equals(k.RegistarskaOznaka) )
                    {
                        return false;
                    }
                }

                user.Auto.BrojRegistarskeOzn = k.RegistarskaOznaka;
                user.Auto.GodisteAutomobila = k.Godina;
                if (k.TipVozila == "putnicki")
                {
                    user.Auto.TA = Enums.TipAutomobila.putnicki;
                }
                else if (k.TipVozila == "kombi")
                {
                    user.Auto.TA = Enums.TipAutomobila.kombi;
                }
                user.Auto.UsernameVozaca = k.Username;

                Automobil zaDodati = user.Auto;
                auta.Add(zaDodati);
                vozaci.Add(user);
                xml.WriteDrivers(vozaci, ss1);
                xml.WriteAuta(auta, ss4);
                return true;
            }
            else
            {
                return false;
            }

        }



    }
}
