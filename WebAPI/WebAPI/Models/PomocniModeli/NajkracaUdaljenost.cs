using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models.PomocniModeli
{

    public class Point
    {
        public Double X { get; set; }
        public Double Y { get; set; }
        public Point() { }
        public Point(Double a, Double b)
        {
            X = a;
            Y = b;
        }
    }

    public class NajkracaUdaljenost
    {
       


        public static double Distance(Point p1 , Point p2)
        {
            return Math.Sqrt(Math.Pow(p2.X - p1.X, 2) + Math.Pow(p2.Y - p1.Y, 2));
        }

        public List<string> OrderByDistance(List<Tuple<Point, string>> pointList, Point pocetnaAdresa)
        {
            var orderedList = new List<Tuple<Double, string>>();

            foreach(var item in pointList)
            {
                var dist = Distance(item.Item1, pocetnaAdresa);
                orderedList.Add(new Tuple<Double, string>(dist, item.Item2));
            }

            List<Tuple<Double, string>> sortiranaLista = orderedList.OrderBy(o => o.Item1).ToList();
            List<string> ret = new List<string>();

            if(sortiranaLista.Count < 5)
            {
                for (int i = 0; i < sortiranaLista.Count; i++)
                {
                    ret.Add(sortiranaLista.ElementAt(i).Item2);
                }
            }
            else
            {
                for (int i = 0; i <5; i++)
                {
                    ret.Add(sortiranaLista.ElementAt(i).Item2);
                }
            }

           
            

            
          
            return ret;
        }
        public List<Voznja> OrderByDistanceZaVoz(List<Voznja> pointList, Point pocetnaAdresa)
        {

            List<Voznja> ret = new List<Voznja>();
            var orderedList = new List<Tuple<Double, Voznja>>();

            foreach (var item in pointList)
            {
                
                Point po = new Point();
                po.X = Double.Parse(item.LokacijaZaDolazak.Xkoordinate);
                po.Y = Double.Parse(item.LokacijaZaDolazak.Ykoordinate);
                var dist = Distance(po, pocetnaAdresa);
                orderedList.Add(new Tuple<Double, Voznja>(dist, item));
            }

            List<Tuple<Double, Voznja>> sortiranaLista = orderedList.OrderBy(o => o.Item1).ToList();
           

           
            foreach (var item in sortiranaLista)
            {
                    ret.Add(item.Item2);
            }
           
            
            return ret;
        }
    }
}