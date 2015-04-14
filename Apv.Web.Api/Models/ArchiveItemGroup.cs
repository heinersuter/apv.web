namespace Apv.Web.Api.Models
{
    using System.IO;
    using System.Text.RegularExpressions;

    public class ArchiveItemGroup
    {
        private readonly Regex _pathRegex = new Regex(@"^([0-9]{4})_([^_]+)_([^_]+)_([^_]+)$", RegexOptions.Compiled);

        public ArchiveItemGroup(string folderPath)
        {
            FolderPath = folderPath;

            var match = _pathRegex.Match(Directory);
            if (match.Success)
            {
                Year = match.Groups[1].Value;
                Unit = match.Groups[2].Value;
                Type = match.Groups[3].Value;
                Name = match.Groups[4].Value;
            }
        }

        /// <summary>
        /// Name of the event beside the Type. May be the location.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// The year as string.
        /// </summary>
        public string Year { get; set; }

        /// <summary>
        /// For Example: Wölfe, Pfadis, Rover, ...
        /// </summary>
        public string Unit { get; set; }

        /// <summary>
        /// For Example: SoLa, PfiLa, ...
        /// </summary>
        public string Type { get; set; }

        public string Description { get; set; }

        public string ImagePath { get; set; }

        /// <summary>
        /// The complete folder path.
        /// </summary>
        public string FolderPath { get; private set; }

        /// <summary>
        /// Only the directory name without path.
        /// </summary>
        public string Directory
        {
            get { return Path.GetFileName(FolderPath.TrimEnd(Path.DirectorySeparatorChar)); }
        }
    }
}