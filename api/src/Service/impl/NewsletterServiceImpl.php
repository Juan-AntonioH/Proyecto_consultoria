<?php

namespace Daw\Service\impl;

use Daw\DAO\NewsletterDAO;
use Daw\DAO\impl\EloquentNewsletterDAO;
use Daw\DTO\NewsletterDTO;
use Daw\Service\NewsletterService;

class NewsletterServiceImpl implements NewsletterService
{
    private NewsletterDAO $newsletterDAO;
    public function __construct()
    {
        $this->newsletterDAO = new EloquentNewsletterDAO();
    }
    public function insert(NewsletterDTO $newsletter): bool
    {
        return $this->newsletterDAO->insert($newsletter);
    }
}
