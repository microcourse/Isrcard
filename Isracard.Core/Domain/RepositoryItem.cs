using Newtonsoft.Json;

namespace Isracard.Core.Domain
{
    public class RepositoryItem
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("owner")]
        public Owner Owner { get; set; }

        [JsonProperty("full_name")]
        public string Name { get; set; }

        [JsonProperty("url")]
        public string Url { get; set; }

    }
}
