<?php
declare(strict_types=1);

// OpenLibrarySearch SDK base feature

class OpenLibrarySearchBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(OpenLibrarySearchContext $ctx, array $options): void {}
    public function PostConstruct(OpenLibrarySearchContext $ctx): void {}
    public function PostConstructEntity(OpenLibrarySearchContext $ctx): void {}
    public function SetData(OpenLibrarySearchContext $ctx): void {}
    public function GetData(OpenLibrarySearchContext $ctx): void {}
    public function GetMatch(OpenLibrarySearchContext $ctx): void {}
    public function SetMatch(OpenLibrarySearchContext $ctx): void {}
    public function PrePoint(OpenLibrarySearchContext $ctx): void {}
    public function PreSpec(OpenLibrarySearchContext $ctx): void {}
    public function PreRequest(OpenLibrarySearchContext $ctx): void {}
    public function PreResponse(OpenLibrarySearchContext $ctx): void {}
    public function PreResult(OpenLibrarySearchContext $ctx): void {}
    public function PreDone(OpenLibrarySearchContext $ctx): void {}
    public function PreUnexpected(OpenLibrarySearchContext $ctx): void {}
}
