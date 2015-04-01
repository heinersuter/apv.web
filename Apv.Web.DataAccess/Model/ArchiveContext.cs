namespace Apv.Web.DataAccess.Model
{
    using System.Data.Entity;

    public class ArchiveContext : DbContext
    {
        // Local reset DB
        // 1. Delete files in App_Data
        // 2. sqllocaldb stop MSSQLLocalDB
        // 3. sqllocaldb delete MSSQLLocalDB
        public ArchiveContext()
            : base("name=ArchiveContext")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }

        public DbSet<ArchiveItemGroupConfig> ArchiveItemGroupConfigs { get; set; }
    }
}
