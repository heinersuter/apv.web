namespace Apv.Web.Api.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Net.Http.Headers;
    using System.Web.Http;
    using Apv.Web.Api.Models;
    using Apv.Web.Api.Services;

    [RoutePrefix("api/ArchiveItemGroup/{group}/ArchiveItem")]
    public class ArchiveItemController : ApiController
    {
        private readonly FileSystemService _fileSystem;

        public ArchiveItemController()
        {
            _fileSystem = new FileSystemService();
        }

        [Authorize]
        [Route("")]
        [HttpGet]
        public IEnumerable<ArchiveItem> GetAllArchiveItems(string group)
        {
            // Debug local: http://localhost:49538/api/ArchiveItemGroup/1979_Wölfe_PfiLa_Kirchlerau/ArchiveItem

            var files = _fileSystem.GetFilesInGroup(group);

            var archiveItems = files.Select(filePath => new ArchiveItem(filePath));

            return archiveItems;
        }

        [Route("{file}/{extension}")]
        [HttpGet]
        public HttpResponseMessage GetArchiveItem(string group, string file, string extension)
        {
            var fileStreamReader = _fileSystem.GetFileStreamReader(group, file + "." + extension);

            var response = Request.CreateResponse();
            response.Content = new PushStreamContent(
                (Action<Stream, HttpContent, TransportContext>)fileStreamReader.WriteToStream,
                new MediaTypeHeaderValue("image/jpeg"));

            return response;
        }

        //[Route("{file}/{extension}")]
        //[HttpGet]
        //public HttpResponseMessage GetArchiveItem(string group, string file, string extension)
        //{
        //    var fileBytes = _fileSystem.GetFileBytes(group, file + "." + extension);

        //    var result = new HttpResponseMessage(HttpStatusCode.OK)
        //    {
        //        Content = new ByteArrayContent(fileBytes)
        //    };
        //    result.Content.Headers.ContentType = new MediaTypeHeaderValue("image/jpeg");

        //    return result;
        //}
    }
}