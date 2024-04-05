<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class TestEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $title;
    public $emailContent;

    public function __construct($title, $emailContent)
    {
        $this->title = $title;
        $this->emailContent = $emailContent;
    }

    public function build()
    {
        return $this->view('mail.test-email')
                    ->subject($this->title)
                    ->with(['emailContent' => $this->emailContent]);
    }


    /**
     * Get the attachments for the emailContent.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [
            // Attachment::fromPath($this->attachedfile);
        ];
    }
}
