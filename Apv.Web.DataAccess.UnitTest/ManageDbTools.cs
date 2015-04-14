namespace Apv.Web.DataAccess.UnitTest
{
    using System;
    using System.IO;
    using System.Linq;
    using Apv.Web.DataAccess.Model;
    using Microsoft.VisualStudio.TestTools.UnitTesting;

    [TestClass]
    public class ManageDbTools
    {
        public const string LocalDb = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFileName={0};Initial Catalog=db;Integrated Security=True;MultipleActiveResultSets=True";

        [TestMethod]
        public void Tool_InitDb()
        {
            var dbFileLocation = Path.GetFullPath(@"..\..\..\Apv.Web.Api\App_Data\archive.mdf");
            var connectionString = string.Format(LocalDb, dbFileLocation);

            using (var db = new ArchiveContext(connectionString))
            {
                db.Database.ExecuteSqlCommand("delete from ArchiveItemGroupConfigs");

                var archiveItemGroup = new ArchiveItemGroupConfig
                {
                    Name = "Test-" + DateTime.Now,
                    FolderPath = @"C:\Users\taasuhe2\progis\apv.web\Apv.Web.Api\archiveItems\1979_Wölfe_PfiLa_Kirchlerau"
                };
                db.ArchiveItemGroupConfigs.Add(archiveItemGroup);
                db.SaveChanges();

                // Display all Blogs from the database 
                var query = from b in db.ArchiveItemGroupConfigs
                            orderby b.Name
                            select b;

                foreach (var item in query)
                {
                    Console.WriteLine(item.Name);
                }
            }
        }
    }
}
