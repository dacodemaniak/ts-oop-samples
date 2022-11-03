export class DateHelper {
    private static SEP: string = '/';

    public static toSlashEuropeanDate(date: Date): string {
        // Shit implementation... wtf 2/4/1968 ???
        // Wanna 02/04/1968
        return DateHelper.zeroFill(date.getDate()) + DateHelper.SEP + DateHelper.zeroFill(date.getMonth() + 1) + DateHelper.SEP + date.getFullYear();
    }

    public static toSlashUSDate(date: Date): string {
        return date.getFullYear() + DateHelper.SEP + DateHelper.zeroFill(date.getMonth() + 1) + DateHelper.SEP + DateHelper.zeroFill(date.getDate());
    }

    /**
     * Returns a date as Jeudi 3 novembre 2022
     * @param date 
     */
    public toFriendlyFrenchDate(date: Date): string {
        const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    }

    private static zeroFill(value: number): string {
        return `0${value.toString()}`.slice(-2);
    }
}