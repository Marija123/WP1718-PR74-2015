
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.DataIO;

using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class ProfController : ApiController
    {
        public static XMLDataIO xml = new XMLDataIO();

        [HttpGet]
        [ActionName("GetUserByUsername")]
        public Korisnik GetUserByUsername(string username)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Musterije.xml");
            string ss1 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Vozaci.xml");
            string ss2 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Dispeceri.xml");
            List<Musterija> users = xml.ReadUsers(ss);
            List<Vozac> vozaci = xml.ReadDrivers(ss1);
            List<Dispecer> dispeceri = xml.ReadDispecer(ss2);

            foreach (Musterija us in users) { 
                if (us.KorisnickoIme == username)
                {
                    Musterija kor = new Musterija();
                    kor.KorisnickoIme = us.KorisnickoIme;
                    kor.Ime = us.Ime;
                    kor.Prezime = us.Prezime;
                    kor.Uloga = us.Uloga;
                    kor.Email = us.Email;
                    kor.KontaktTelefon = us.KontaktTelefon;
                    kor.Pol =us.Pol;
                    kor.Lozinka = null;
                    kor.JMBG = us.JMBG;
                   
                    
                    return kor;
                }
            }
            foreach (Dispecer us in dispeceri)
            {
                if (us.KorisnickoIme == username)
                {
                    Dispecer kor = new Dispecer();
                    kor.KorisnickoIme = us.KorisnickoIme;
                    kor.Ime = us.Ime;
                    kor.Prezime = us.Prezime;
                    kor.Uloga = us.Uloga;
                    kor.Email = us.Email;
                    kor.KontaktTelefon = us.KontaktTelefon;
                    kor.Pol = us.Pol;
                    kor.Lozinka = null;
                    kor.JMBG = us.JMBG;


                    return kor;
                }
            }
            foreach (Vozac us in vozaci)
            {
                if (us.KorisnickoIme == username)
                {
                    Vozac kor = new Vozac();
                    kor.KorisnickoIme = us.KorisnickoIme;
                    kor.Ime = us.Ime;
                    kor.Prezime = us.Prezime;
                    kor.Uloga = us.Uloga;
                    kor.Email = us.Email;
                    kor.KontaktTelefon = us.KontaktTelefon;
                    kor.Pol = us.Pol;
                    kor.Lozinka = null;
                    kor.JMBG = us.JMBG;


                    return kor;
                }
            }

            return null;
        }

        [HttpPost]
        [ActionName("AddDriveCustomer")]
        public bool AddDriveCustomer([FromBody]VoznjaPomocna k)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Musterije.xml");
            string ss1 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");

            List<Musterija> users = xml.ReadUsers(ss);
            List<Voznja> drives = xml.ReadDrives(ss1);
            // bool g = true;
            Korisnik c = new Musterija();
            Voznja drive = new Voznja();
            foreach (Korisnik u in users)
            {
                if (u.KorisnickoIme == k.korisnicko)
                {
                    c = u;
                    Adresa a = new Adresa(k.Street, k.Number, k.Town, Int32.Parse(k.PostalCode));
                    Lokacija l = new Lokacija(k.XCoord, k.YCoord, a);
                    drive.Mus = (Musterija)c;
                    drive.LokacijaZaDolazak = l;
                    if (k.tipAuta != "")
                    {
                        drive.TipAuta = (Enums.TipAutomobila)int.Parse(k.tipAuta);
                    }
                    drive.Iznos = 0;
                    drive.Kom = null;
                    drive.DatumIVremePorudzbine = DateTime.Now;
                    drive.Odrediste = null;
                    drive.Disp = new Dispecer();
                    drive.Voz = null;
                    drive.Stat = Enums.StatusVoznje.Kreirana_NaCekanju;
                    // u.Drives.Add(drive);

                    //  g = false;
                }
            }

            drives.Add(drive);
            xml.WriteUsers(users, ss);
            xml.WriteDrives(drives, ss1);

            return true;


        }

        [HttpPost]
        [ActionName("AddDriveDispecer")]
        public bool AddDriveDispecer([FromBody]VoznjaPomocna k)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Dispeceri.xml");
            string ss1 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");

            List<Dispecer> users = xml.ReadDispecer(ss);
            List<Voznja> drives = xml.ReadDrives(ss1);
            // bool g = true;
            Korisnik c = new Dispecer();
            Voznja drive = new Voznja();
            foreach (Dispecer u in users)
            {
                if (u.KorisnickoIme == k.korisnicko)
                {
                    c = u;
                    Adresa a = new Adresa(k.Street, k.Number, k.Town, Int32.Parse(k.PostalCode));
                    Lokacija l = new Lokacija(k.XCoord, k.YCoord, a);
                    drive.Mus = new Musterija() ;
                    drive.LokacijaZaDolazak = l;
                    if (k.tipAuta != "")
                    {
                        drive.TipAuta = (Enums.TipAutomobila)int.Parse(k.tipAuta);
                    }
                    drive.Iznos = 0;
                    drive.Kom = null;
                    drive.DatumIVremePorudzbine = DateTime.Now;
                    drive.Odrediste = null;
                    drive.Disp = (Dispecer)c;
                    drive.Voz = null;
                    drive.Stat = Enums.StatusVoznje.Kreirana_NaCekanju;
                    // u.Drives.Add(drive);

                    //  g = false;
                }
            }

            drives.Add(drive);
            xml.WriteDispecer(users, ss);
            xml.WriteDrives(drives, ss1);

            return true;


        }

        [HttpGet]
        [ActionName("GetDrives")]
        public List<Voznja> GetDrives(string username)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");

            List<Voznja> listaDrives = xml.ReadDrives(ss);
            List<Voznja> listaDrives1 = new List<Voznja>();
            foreach (Voznja d in listaDrives)
            {
                if (d.Mus.KorisnickoIme == username || d.Disp.KorisnickoIme == username)
                {
                    listaDrives1.Add(d);
                }
            }
            return listaDrives1;
        }

    }
}
