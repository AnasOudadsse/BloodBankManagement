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
    public $donorName;

    public function __construct($title, $emailContent, $donorName)
    {
        $this->title = $title;
        $this->emailContent = $emailContent;
        $this->donorName = $donorName;
    }

    public function build()
    {
        return $this->view('mail.test-email')
                    ->subject($this->title)
                    ->with(['emailContent' => $this->emailContent, 'donorName' => $this->donorName]);
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
