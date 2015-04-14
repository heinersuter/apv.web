namespace Apv.Web.DataAccess.Model
{
    using System.Data.Entity;

    // Local reset DB
    // 1. Delete files in App_Data
    // 2. sqllocaldb stop MSSQLLocalDB
    // 3. sqllocaldb delete MSSQLLocalDB
    public class ArchiveContext : DbContext
    {
        public ArchiveContext()
            : this("name=ArchiveContext")
        {
        }

        public ArchiveContext(string connectionString)
            : base(connectionString)
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }

        public DbSet<ArchiveItemGroupConfig> ArchiveItemGroupConfigs { get; set; }
    }
}
