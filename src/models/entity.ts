export {};

class Entity {
  name: string;
  url: string;
  logo: string;
  verified_domains: any;
  category: string;
  verified_info: string;
  description: string;
  supported_languages: any;
  categories: any;
  highlight_categories: any;
  customers: any;
  developer: string;
  developer_url: string;
  developer_logourl: string
  developer_links: any;
  links: any;

  constructor(data: any) {
    // Object.entries(data).forEach(([key, value]) => this[`${key}`] = value);
    this.name = data['name'];
    this.url = data['url'];
    this.logo = data['logo'];
    this.verified_domains = data['verified_domains'];
    this.category = data['category'];
    this.verified_info = data['verified_info'];
    this.description = data['description'];
    this.supported_languages = data['supported_languages'];
    this.categories = data['categories'];
    this.highlight_categories = data['highlight_categories'];
    this.customers = data['customers'];
    this.developer = data['developer'];
    this.developer_url = data['developer_url'];
    this.developer_logourl = data['developer_logourl'];
    this.developer_links = data['developer_links'];
    this.links = data['links'];
  }
}

module.exports = Entity;