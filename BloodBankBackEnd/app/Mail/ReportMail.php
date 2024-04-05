<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;

use Illuminate\Queue\SerializesModels;

class ReportMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $reportPdf;
    public $donorName;

    public function __construct($reportPdf,  $donorName)
    {
        $this->reportPdf = $reportPdf;
        $this->donorName = $donorName;
    }

    public function build()
    {
        return $this->view('mail.report-email')
                    ->subject('Your Blood Analysis Repory')
                    ->with(['reportPdf' => $this->reportPdf, 'donorName' => $this->donorName])
                    ->attach($this->reportPdf); // Use the attach method here
                    
    }

}
