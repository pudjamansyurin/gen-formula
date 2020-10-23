<?php

namespace App\Traits\Routines;

use App\Notifications\VerifyEmail;

trait UserRoutine
{
    /**
     * Send the email verification notification.
     *
     * @return void
     */
    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmail());
    }

    /**
     * Record login information
     */
    public function recordLoginInfo()
    {
        $this->withoutEvents(function () {
            $this->forceFill([
                'last_at' => now(),
                'last_ip' => request()->getClientIp()
            ])->save();
        });
    }
}
