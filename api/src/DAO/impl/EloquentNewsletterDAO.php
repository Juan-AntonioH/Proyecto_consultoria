<?php

namespace Daw\DAO\impl;

use App\Models\Contacto;
use App\Models\Newsletter;
use Daw\DAO\NewsletterDAO;
use Daw\DTO\NewsletterDTO;

class EloquentNewsletterDAO implements NewsletterDAO
{


    /**
     *
     * @param \Daw\DTO\NewsletterDTO $newsletters
     * @return bool
     */
    public function insert(NewsletterDTO $newsletters): bool
    {

        if (!Newsletter::where('email', $newsletters->email())->first()) {
            $newsletter = new Newsletter();
        }else{
            return false;
        }

        $newsletter->email = $newsletters->email();

        return $newsletter->save();
    }
}
